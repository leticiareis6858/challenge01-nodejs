import { NextFunction, Request, Response } from 'express';
import { tutor, pets } from '../models/Client';

//pets:

const createPet = async (req: Request, res: Response) => {
    const Pet = await pets.create(req.body); // done
    res.status(201).json({ Pet });
};

const updatePet = async (req: Request, res: Response, next: NextFunction) => {
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

const deletePet = async (req: Request, res: Response, next: NextFunction) => {
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

module.exports = {
    createPet,
    updatePet,
    deletePet,
};
