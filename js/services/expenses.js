window.ExpenseService = {

    async getAll(filters = {}) {
        return (
            await axios.get(
                "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/expenses",
                {
                    params: filters
                }
            )
        ).data;
    },

    async show(id) {
        return (
            await axios.get(
                "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/expenses/" + id
            )
        ).data;
    },

    async create(data) {
        return (
            await axios.post(
                "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/expenses",
                data
            )
        ).data;
    }

};
