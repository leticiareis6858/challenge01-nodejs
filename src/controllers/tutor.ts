import { Request, Response, NextFunction } from 'express';
import { tutorModel } from '../models/Client';

export const getAllTutors = async (req: Request, res: Response) => {
    try {
        const Tutors = await tutorModel.find({}).populate('pets');
        res.status(200).json({ Tutors });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong.' });
    }
};

export const createTutor = async (req: Request, res: Response) => {
    try {
        const Tutor = await tutorModel.create(req.body);
        res.status(201).json({ Tutor });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong.' });
    }
};

export const updateTutor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id: tutorId } = req.params;
        const Tutor = await tutorModel.findOneAndUpdate(
            { _id: tutorId },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!Tutor) {
            return next(
                res
                    .status(404)
                    .json({ msg: `Theres no tutor with id: ${tutorId}` }) // done
            );
        }
        res.status(200).json({ Tutor });
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong.' });
    }
};

export const deleteTutor = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { id: tutorId } = req.params;
        const Tutor = await tutorModel.findByIdAndRemove(tutorId);
        if (!Tutor) {
            return next(
                res
                    .status(404)
                    .json({ msg: `Theres no tutor with id: ${tutorId}` }) // done
            );
        }
        res.status(200).json();
    } catch (error) {
        res.status(500).json({ msg: 'Something went wrong.' });
    }
};
