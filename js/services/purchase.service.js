const PurchaseService = {

    async save(payload) {

        const res = await axios.post(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/purchases",

            payload

        );

        return res.data;

    },

    async getAll(filters = {}) {

        const res = await axios.get(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/purchases",

            {

                params: filters

            }

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

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/purchases/" + id

        );

        return res.data;

    }

};
