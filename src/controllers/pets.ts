import { NextFunction, Request, Response } from 'express';
import { tutor, pets } from '../models/Client';

//pets:

export const createPet = async (req: Request, res: Response) => {
    const { tutorId } = req.params;

    try {
        const pet = await pets.create(req.body);
        const Tutor = await tutor.findById(tutorId);
        if (!Tutor) {
            res.status(404).json({
                msg: `There is no tutor with id: ${tutorId}`,
            });
        }
        Tutor?.pets.push(pet._id);
        await Tutor?.save();

        res.status(201).json({ pets: pet });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create a pet' });
    }
};

export const updatePet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { tutorId, petsId } = req.params; // done
    if (!tutor) {
        return next(
            res.status(404).json({ msg: `Theres no tutor with id:${tutorId}` })
        );
    }
    if (!pets) {
        return next(
            res.status(404).json({ msg: `Theres no pet with id: ${petsId}` })
        );
    }
    const Pets = await pets.findByIdAndUpdate({ _id: petsId }, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({ Pets });
};

export const deletePet = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { tutorId, petsId } = req.params; // done
    if (!tutor) {
        return next(
            res.status(404).json({ msg: `Theres no tutor with id:${tutorId}` })
        );
    }
    if (!pets) {
        return next(
            res.status(404).json({ msg: `Theres no pet with id: ${petsId}` })
        );
    }
    const Pet = await pets.findByIdAndRemove({ _id: petsId });
    res.status(200).json({ Pet });
};
