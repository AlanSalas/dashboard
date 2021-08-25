import * as yup from "yup";

export const courseSchema = yup.object({
  name: yup.string("Enter a name").trim().required("Name is required"),
});

export const lessonSchema = yup.object({
  name: yup.string("Enter a name").trim().required("Name is required"),
  courseId: yup.string("Select a course").required("Course is required"),
});

export const adSchema = yup.object({
  description: yup
    .string("Enter a description")
    .trim()
    .required("Description is required"),
  lessonId: yup.string("Select a lesson").required("Lesson is required"),
});

export const studentSchema = yup.object({
  name: yup.string("Enter a name").trim().required("Name is required"),
  lastName: yup
    .string("Enter a last name")
    .trim()
    .required("Last name is required"),
  age: yup
    .number("Enter an age")
    .min(5, "Student should have more than 5 years")
    .max(90, "Who person in this world study at 90+ years?")
    .required("Age is required"),
});
