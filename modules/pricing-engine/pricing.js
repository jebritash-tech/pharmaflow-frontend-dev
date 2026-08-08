const Pricing = {

template: `
<div class="space-y-6">

    <!-- Header -->

    <div class="flex items-center justify-between">

        <div>

            <h2 class="text-2xl font-bold">

                محرك الأسعار

            </h2>

            <p class="text-gray-500">

                إدارة قواعد التسعير ومحاكاة الأسعار

            </p>

        </div>

    </div>

    <!-- ===================================================== -->

    <!-- Rule Form -->

    <!-- ===================================================== -->

    <div class="bg-white rounded-xl shadow p-6">

        <h3 class="text-lg font-semibold mb-4">

            {{ rule.id ? 'تعديل قاعدة' : 'إضافة قاعدة' }}

        </h3>

        <div class="grid grid-cols-6 gap-4">

            <div class="col-span-2">

                <label class="text-sm">

                    اسم القاعدة

                </label>

                <input

                    v-model="rule.name"

                    class="w-full border rounded p-2"

                >

            </div>

            <div>

                <label>

                    النوع

                </label>

                <select

                    v-model="rule.type"

                    class="w-full border rounded p-2"

                >

                    <option value="percentage">

                        نسبة %

                    </option>

                    <option value="fixed">

                        مبلغ ثابت

                    </option>

                    <option value="multiply">

                        ضرب

                    </option>

                </select>

            </div>

            <div>

                <label>

                    تطبق على

                </label>

                <select

                    v-model="rule.apply_on"

                    class="w-full border rounded p-2"

                >

                    <option value="buy_price">

                        سعر الشراء

                    </option>

                    <option value="sell_price">

                        سعر البيع

                    </option>

                    <option value="profit">

                        الربح

                    </option>

                </select>

            </div>

            <div>

                <label>

                    القيمة

                </label>

                <input

                    type="number"

                    v-model.number="rule.value"

                    class="w-full border rounded p-2"

                >

            </div>

            <div>

                <label>

                    الترتيب

                </label>

                <input

                    type="number"

                    v-model.number="rule.sort_order"

                    class="w-full border rounded p-2"

                >

            </div>

        </div>

        <div class="flex justify-between mt-4">

            <label class="flex items-center gap-2">

                <input

                    type="checkbox"

                    v-model="rule.is_active"

                >

                مفعلة

            </label>

            <div class="space-x-2">

                <button

                    class="px-4 py-2 rounded bg-gray-200"

                    @click="resetRule"

                >

                    جديد

                </button>

                <button

                    class="px-4 py-2 rounded bg-blue-600 text-white"

                    @click="saveRule"

                    :disabled="saving"

                >

                    حفظ

                </button>

            </div>

        </div>

    </div>

    <!-- ===================================================== -->

    <!-- Rules -->

    <!-- ===================================================== -->

    <div class="bg-white rounded-xl shadow">

        <table class="w-full">

            <thead class="bg-gray-100">

                <tr>

                    <th>#</th>

                    <th>الاسم</th>

                    <th>النوع</th>

                    <th>التطبيق</th>

                    <th>القيمة</th>

                    <th>الترتيب</th>

                    <th>الحالة</th>

                    <th>العمليات</th>

                </tr>

            </thead>

            <tbody>

                <tr

                    v-for="item in rules"

                    :key="item.id"

                >

                    <td>

                        {{ item.id }}

                    </td>

                    <td>

                        {{ item.name }}

                    </td>

                    <td>

                        {{ item.type }}

                    </td>

                    <td>

                        {{ item.apply_on }}

                    </td>

                    <td>

                        {{ item.value }}

                    </td>

                    <td>

                        {{ item.sort_order }}

                    </td>

                    <td>

                        <span

                            class="px-2 py-1 rounded"

                            :class="item.is_active ? 'bg-green-100 text-green-700':'bg-red-100 text-red-700'"

                        >

                            {{ item.is_active?'مفعلة':'متوقفة' }}

                        </span>

                    </td>

                    <td class="space-x-2">

                        <button

                            @click="editRule(item)"

                        >

                            ✏

                        </button>

                        <button

                            @click="toggleRule(item.id)"

                        >

                            🔄

                        </button>

                        <button

                            @click="deleteRule(item.id)"

                        >

                            🗑

                        </button>

                        <button
                            @click="applyRule(item.id)"
                            class="text-green-600 hover:text-green-800"
                            title="تطبيق القاعدة على جميع الأسعار"
                        >
                            🚀
                        </button>

                    </td>

                </tr>

            </tbody>

        </table>

    </div>

    <!-- ===================================================== -->

    <!-- Simulator -->

    <!-- ===================================================== -->

    <div class="bg-white rounded-xl shadow p-6">

        <h3 class="text-lg font-semibold mb-4">

            محاكاة السعر

        </h3>

        <div class="grid grid-cols-4 gap-4">

            <div>

                <label>

                    سعر الشراء

                </label>

                <input

                    type="number"

                    v-model.number="simulator.buy_price"

                    class="w-full border rounded p-2"

                >

            </div>

            <div>

                <label>

                    معامل الوحدة

                </label>

                <input

                    type="number"

                    v-model.number="simulator.factor"

                    class="w-full border rounded p-2"

                >

            </div>

            <div class="flex items-end">

                <button

                    class="bg-green-600 text-white rounded px-4 py-2"

                    @click="simulate"

                >

                    تشغيل

                </button>

            </div>

        </div>

        <div

            v-if="simulationResult"

            class="mt-6"

        >

            <div

                v-for="step in simulationResult.steps"

                class="border-b py-2"

            >

                <div class="font-semibold">

                    {{ step.rule }}

                </div>

                <div class="text-gray-500">

                    {{ step.before }}

                    →

                    {{ step.after }}

                </div>

            </div>

            <div class="mt-4 bg-blue-50 rounded p-4">

                <div>

                    سعر البيع

                    <strong>

                        {{ simulationResult.sell_price }}

                    </strong>

                </div>

                <div>

                    الربح

                    <strong>

                        {{ simulationResult.profit_amount }}

                    </strong>

                </div>

                <div>

                    النسبة

                    <strong>

                        {{ simulationResult.profit_percent }}%

                    </strong>

                </div>

            </div>

        </div>

    </div>

</div>
`,

setup() {

    /*
    |--------------------------------------------------------------------------
    | Services
    |--------------------------------------------------------------------------
    */

    const pricing = window.pricingService;

    /*
    |--------------------------------------------------------------------------
    | State
    |--------------------------------------------------------------------------
    */

    const loading = Vue.ref(false);

    const saving = Vue.ref(false);

    const rules = Vue.ref([]);

    const simulationResult = Vue.ref(null);

    /*
    |--------------------------------------------------------------------------
    | Rule Form
    |--------------------------------------------------------------------------
    */

    const rule = Vue.reactive({

        id: null,

        name: '',

        type: 'percentage',

        apply_on: 'sell_price',

        value: 0,

        sort_order: 1,

        is_active: true

    });

    /*
    |--------------------------------------------------------------------------
    | Simulation
    |--------------------------------------------------------------------------
    */

    const simulator = Vue.reactive({
        medicine_id: null,

        buy_price: 100,

        factor: 10

    });

        /*
    |--------------------------------------------------------------------------
    | Load Rules
    |--------------------------------------------------------------------------
    */

    const loadRules = async () => {

        loading.value = true;

        try {

            rules.value = await pricing.loadRules();

        }

        finally {

            loading.value = false;

        }

    };

        const resetRule = () => {

        rule.id = null;

        rule.name = '';

        rule.type = 'percentage';

        rule.apply_on = 'sell_price';

        rule.value = 0;

        rule.sort_order =

            rules.value.length + 1;

        rule.is_active = true;

    };

        const saveRule = async () => {

        saving.value = true;

        try {

            if(rule.id){

                await pricing.updateRule(

                    rule.id,

                    rule

                );

            }

            else{

                await pricing.createRule(

                    rule

                );

            }

            await loadRules();

            resetRule();

        }

        finally{

            saving.value=false;

        }

    };

        const editRule = (item)=>{

        Object.assign(

            rule,

            item

        );

    };

        const deleteRule = async(id)=>{

        if(

            !confirm(

                'حذف القاعدة؟'

            )

        ) return;

        await pricing.deleteRule(id);

        loadRules();

    };

        const toggleRule = async(id)=>{

        await pricing.toggleRule(id);

        loadRules();

    };

    const applyRule = async (id) => {

        if (!confirm(
            'سيتم إعادة توليد أسعار جميع الأدوية باستخدام هذه القاعدة، هل تريد المتابعة؟'
        )) {
            return;
        }

        loading.value = true;

        try {

            await pricing.regenerateAll();

            alert('تم إعادة توليد جميع الأسعار بنجاح.');

        } finally {

            loading.value = false;

        }

    };
        const simulate = async()=>{

        simulationResult.value =

            await pricing.simulate(

                simulator

            );

    };

        Vue.onMounted(async()=>{

        await loadRules();

    });

        return{

        loading,

        saving,

        rules,

        rule,

        simulator,

        simulationResult,

        loadRules,

        saveRule,

        editRule,

        deleteRule,

        toggleRule,
        applyRule,

        simulate,

        resetRule

    };

}}