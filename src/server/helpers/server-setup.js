module.exports = {

    /*
	@method getDocs
    @async
	@return Array
	*/
    async getDocs(model, selectorObject = {}, fields = null, options = {}) {
        let result = await model.find(selectorObject, fields, options).exec();
        if (result) {
            console.log(result)
        } else {
            throw new Error(
                JSON.stringify({
                    status: 404,
                    message: "No documets found",
                })
            );
        }
    },
};
