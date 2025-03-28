const uploadRepo = (fileService) => {
    const uploadSingle = async ({name, file, type}) => await fileService.uploadSingle({
        name,
        file,
        type,
    })

    const uploadMultiple = (files) => fileService.uploadMultiple(files)

    const createFiles = async ({fileNames, files, type, uuid}) => await fileService.createFiles({fileNames, files, type, uuid})


    return {
        uploadSingle,
        uploadMultiple,
        createFiles,
    }
}

export default uploadRepo