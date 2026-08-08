const apiBase = "https://pharmaflow-api-1.1.0-beta-main.test/api";
class PricingService {

    /*
    |--------------------------------------------------------------------------
    | Rules
    |--------------------------------------------------------------------------
    */

    async loadRules() {

        const { data } = await axios.get(

            `${apiBase}/price-engine/rules`

        );

        return data;

    }

    async createRule(payload) {

        const { data } = await axios.post(

            `${apiBase}/price-engine/rules`,

            payload

        );

        return data;

    }

    async updateRule(id, payload) {

        const { data } = await axios.put(

            `${apiBase}/price-engine/rules/${id}`,

            payload

        );

        return data;

    }

    async deleteRule(id) {

        const { data } = await axios.delete(

            `${apiBase}/price-engine/rules/${id}`

        );

        return data;

    }

    async toggleRule(id) {

        const { data } = await axios.patch(

            `${apiBase}/price-engine/rules/${id}/toggle`

        );

        return data;

    }

    /*
    |--------------------------------------------------------------------------
    | Simulation
    |--------------------------------------------------------------------------
    */

    async simulate(payload) {

        const { data } = await axios.post(

            `${apiBase}/price-engine/simulate`,

            payload

        );

        return data;

    }

    /*
    |--------------------------------------------------------------------------
    | Regenerate Prices
    |--------------------------------------------------------------------------
    */

    async regenerateBatch(batchId) {

        const { data } = await axios.post(

            `${apiBase}/batches/${batchId}/regenerate-prices`

        );

        return data;

    }

    async regenerateMedicine(medicineId) {

        const { data } = await axios.post(

            `${apiBase}/medicines/${medicineId}/regenerate-prices`

        );

        return data;

    }

    async regenerateAll() {

        const { data } = await axios.post(

            `${apiBase}/price-engine/regenerate-all`

        );

        return data;

    }

    /*
    |--------------------------------------------------------------------------
    | Prices
    |--------------------------------------------------------------------------
    */

    async loadMedicinePrices(medicineId) {

        const { data } = await axios.get(

            `${apiBase}/medicines/${medicineId}/prices`

        );

        return data;

    }

    async loadBatchPrices(batchId) {

        const { data } = await axios.get(

            `${apiBase}/batches/${batchId}/prices`

        );

        return data;

    }

    async updatePrice(priceId, payload) {

        const { data } = await axios.put(

            `${apiBase}/prices/${priceId}`,

            payload

        );

        return data;

    }

    async togglePrice(priceId) {

        const { data } = await axios.patch(

            `${apiBase}/prices/${priceId}/toggle`

        );

        return data;

    }

}

window.pricingService = new PricingService();