import { NextFunction, Request, Response } from 'express';
import { tutor } from '../models/Client';

//tutor:

const getAllTutors = async (req: Request, res: Response) => {
    const Tutors = await tutor.find({}); // done
    res.status(200).json({ Tutors });
};

const createTutor = async (req: Request, res: Response) => {
    const Tutor = await tutor.create(req.body); // done
    res.status(201).json({ Tutor });
};

const getTutor = async (req: Request, res: Response, next: NextFunction) => {
    const { id: tutorId } = req.params;
    const Tutor = await tutor.findOne({ _id: tutorId });
    if (!tutor) {
        return next(
            res.status(404).json({ msg: `Theres no tutor with id: ${tutorId}` })
        ); // done
    }
    res.status(200).json({ Tutor });
};

const updateTutor = async (req: Request, res: Response, next: NextFunction) => {
    const { id: tutorId } = req.params;
    const Tutor = await tutor.findOneAndUpdate({ _id: tutorId }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!tutor) {
        return next(
            res.status(404).json({ msg: `Theres no tutor with id: ${tutorId}` }) // done
        );
    }
    res.status(200).json({ Tutor });
};

const deleteTutor = async (req: Request, res: Response, next: NextFunction) => {
    const { id: tutorId } = req.params;
    if (!tutor) {
        return next(
            res.status(404).json({ msg: `Theres no tutor with id: ${tutorId}` }) // done
        );
    }
    const Tutor = await tutor.findByIdAndRemove({ _id: tutorId });
    res.status(200).json({ Tutor });
};

module.exports = {
    getAllTutors,
    createTutor,
    getTutor,
    updateTutor,
    deleteTutor,
};
