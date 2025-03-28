import {httpRequest} from "../index";

const uploadService = () => {
    const {post} = httpRequest()
    const uploadSingle = ({name, file, type, info,}) => {
        let formData = new FormData();
        formData.append("file", file);
        formData.append("name", name);
        formData.append("type", type);
        formData.append("info", info);
        return post('upload-file', formData)
    }

    const uploadMultiple = (files) => Promise.all(files.map((file) => uploadSingle(file)),)

    const createFiles = ({fileNames, files, type, uuid}) => post('file/upload', {fileNames, files, type, uuid})

    return {
        uploadSingle,
        uploadMultiple,
        createFiles
    }
}

export default uploadService