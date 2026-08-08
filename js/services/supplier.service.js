const SupplierService = {

    async getAll() {

        const res = await axios.get(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/suppliers"

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

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/suppliers/" + id

        );

        return res.data;

    }

};
