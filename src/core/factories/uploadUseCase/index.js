const validateFiles = (files) => {
    let isValid = true
    files.forEach(
        (file) => {
            if (!file.name || !file.file || !file.type) isValid = false
        },
    )
    return isValid
}

const uploadUseCase = (fileRepo) => {
    const uploadSingle = ({ name, file, type }) => {
        if (!name || !file || !type) {
            throw Error('Name, file and type are required')
        }

        return fileRepo.uploadSingle({
            name,
            file,
            type,
        })
    }

    const uploadMultiple = (files) => {
        if (!files || !validateFiles(files)) {
            throw Error('Name, file and type are required')
        }

        return fileRepo.uploadMultiple(files)
    }

    const createFiles = ({fileNames, files, type, uuid}) => fileRepo.createFiles({fileNames, files, type, uuid})


    return {
        uploadSingle,
        uploadMultiple,
        createFiles,
    }
}

export default uploadUseCase