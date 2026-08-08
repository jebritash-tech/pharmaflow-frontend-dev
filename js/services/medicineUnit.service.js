const MedicineUnitService={

    async all(id){
        
        const res=
        
        await axios.get(
        
        "https://pharmaflow-api-2-0-0-stable.onrender.com/api"+
        
        "/medicines/"+
        
        id+
        
        "/units"
        
        );
        
        return res.data;
    
    },
    
    async create(data){
    
        return axios.post(
        
        "https://pharmaflow-api-2-0-0-stable.onrender.com/api"+
        
        "/medicine-units",
        
        data
        
        );
        
    },
    
    async update(id,data){
    
        return axios.put(
        
        "https://pharmaflow-api-2-0-0-stable.onrender.com/api"+
        
        "/medicine-units/"+id,
        
        data
        
        );
    
    },
    
    async delete(id){
        
        return axios.delete(
        
        "https://pharmaflow-api-2-0-0-stable.onrender.com/api"+
        
        "/medicine-units/"+id
        
        );
        
        }
    
    };
