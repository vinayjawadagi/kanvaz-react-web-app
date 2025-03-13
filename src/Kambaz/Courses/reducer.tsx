import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { courses } from '../Database';

const initialState = {
    courses: courses, // Initial list of courses from your Database
};

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        addCourse: (state, { payload: course }) => {
            const newCourse = {
                _id: uuidv4(),
                name: course.name,
                number: course.number,
                startDate: course.startDate,
                endDate: course.endDate,
                description: course.description,
                department: course.department,
                credits: course.credits
            };
            state.courses = [...state.courses, newCourse]; // Add new course to the array
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter((course) => course._id !== courseId); // Remove course by ID
        },
        updateCourse: (state, { payload: course }) => {
            state.courses = state.courses.map((existingCourse) =>
                existingCourse._id === course._id ? course : existingCourse
            ); // Update the course if IDs match
        }
    },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
