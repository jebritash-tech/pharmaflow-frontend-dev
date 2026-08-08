window.DebtService = {

    async getAll(filters={}){

        return(
        
        await axios.get(
        
            "https://pharmaflow-api-2-0-0-stable.onrender.com/api"+"/debts",
        
        {
        
        params:filters
        
        }
        
        )
        
        ).data;
        
        },
        
        async show(id){
        
        return(
        
        await axios.get(
        
            "https://pharmaflow-api-2-0-0-stable.onrender.com/api"+"/debts/"+id
        
        )
        
        ).data;
        
        },
        
        async pay(id,amount){
        
        return(
        
        await axios.post(
        
            "https://pharmaflow-api-2-0-0-stable.onrender.com/api"+"/debts/"+id+"/payment",
        
        {
        
        amount
        
        }
        
        )
        
        ).data;
        
        },
        async create(data) {
            return await axios.post("https://pharmaflow-api-2-0-0-stable.onrender.com/api/debts", data);
        }

};
