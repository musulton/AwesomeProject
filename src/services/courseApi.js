import api from "../config/api";

export const getCourseById = (id) => api.get("/courses/" + id);

export const getCourses = (page) => api.get("/courses", {
    params: {
        page
    }
})

export const addCourse = (data) => {
    return api.post("/courses", data, {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
}

export const updateCourseById = (course) => {
    return api.put("/courses/" + course.courseId, course);
}

export const deleteCourseById = async (id, onSuccess) => {
    try {
        await api.delete("/courses/" + id)
        onSuccess?.()
    } catch (e) {
        alert("Gagal menghapus data dengan id: " + id)
    }
};

export const downloadCourseMaterial = async (filename) => {
    try {
        const response = await api.get("/course-files", {
            responseType: "blob",
            params: {
                filename
            }
        })

        const courseFile = new Blob([response?.data])
        const url = window.URL.createObjectURL(courseFile);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        // document.body.appendChild(link);
        link.click();
        // document.body.removeChild(link);
    } catch (e) {
        alert("Gagal download")
    }
}
