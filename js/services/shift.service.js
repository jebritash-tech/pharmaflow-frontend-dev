window.ShiftService = {
    
    async getAll(filters = {}) {

        const res = await axios.get(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/shifts",

            {

                params: filters

            }

        );

        return res.data;

    },

    async get(id) {

        const res = await axios.get(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api" + "/shifts/" + id

        );

        return res.data;

    },
    async show(id){

        const res = await axios.get(

            "https://pharmaflow-api-2-0-0-stable.onrender.com/api"  + "/shifts/" + id

        );

        return res.data;

    },

};
