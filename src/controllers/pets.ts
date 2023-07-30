import { NextFunction, Request, Response } from 'express';
import { tutorModel, petsModel } from '../models/Client';

export const createPet = async (req: Request, res: Response) => {
    const { tutorId } = req.params;

    try {
        const pet = await petsModel.create(req.body);

        const tutor = await tutorModel.findById(tutorId);

        if (!tutor) {
            return res.status(404).json({
                msg: `There is no tutor with id: ${tutorId}`,
            });
        }
        tutor.pets.push(pet._id);
        await tutor.save();

        res.status(201).json({ pet });
    } catch (error) {
        return res.status(500).json({ msg: 'Something went wrong.' });
    }
};

export const updatePet = async (req: Request, res: Response) => {
    try {
        const { tutorId, petId } = req.params;
        const tutor = await tutorModel.findById(tutorId);
        if (!tutor) {
            return res
                .status(404)
                .json({ msg: `Theres no tutor with id:${tutorId}` });
        }
        const pet = await petsModel.findById(petId);
        if (!pet) {
            return res
                .status(404)
                .json({ msg: `Theres no pet with id: ${petId}` });
        }
        const petUpdated = await petsModel.findByIdAndUpdate(petId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({ petUpdated });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong.' });
    }
};

export const deletePet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { tutorId, petId } = req.params;
        const tutor = await tutorModel.findById(tutorId);
        if (!tutor) {
            return next(
                res
                    .status(404)
                    .json({ msg: `Theres no tutor with id:${tutorId}` })
            );
        }
        const pet = await petsModel.findByIdAndRemove(petId);
        if (!pet) {
            return next(
                res.status(404).json({ msg: `Theres no pet with id: ${petId}` })
            );
        }
        res.status(200).json();
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong.' });
    }
};
