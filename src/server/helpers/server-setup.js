module.exports = {
    async getDocById(cloudantConnection, docId, collection) {
        let result = await cloudantConnection.queryData(collection, {
            _id: docId,
        });
        if (result && result.docs && result.docs.length > 0) {
            return result.docs;
        } else {
            throw new Error(
                JSON.stringify({
                    status: 404,
                    message: "Document " + docId + " not found",
                })
            );
        }
    },
};
