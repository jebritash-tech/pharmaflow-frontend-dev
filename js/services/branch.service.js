const BranchService = {

    async getAll() {

        const res = await axios.get(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/branches"

        );

        const data = res.data;

        if (Array.isArray(data))
            return data;

        if (Array.isArray(data.data))
            return data.data;

        return [];

    },

    async get(id) {

        const res = await axios.get(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/branches/" + id

        );

        return res.data;

    }

};
