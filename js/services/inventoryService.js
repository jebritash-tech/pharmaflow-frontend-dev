window.inventoryService = {

    async getAll(filters = {}) {
        return (
            await axios.get(
                "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/inventories",
                {
                    params: filters
                }
            )
        ).data;
    },

    async adjust(payload) {
        return (
            await axios.post(
                "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/inventories/adjust",
                payload
            )
        ).data;
    }

};
