import { ref, watchEffect, } from 'vue';

export default function () {
    let temp = ref(0);
    let height = ref(0);

    function changeTemp() {
        temp.value += 10;
    }

    function changeHeight() {
        height.value += 10;
    }

    watchEffect(() => {
        if (temp.value >= 60 || height.value >= 80) {
            // 模拟发送请求到服务器
            console.log(`发送请求: 水温=${temp.value}℃, 水位=${height.value}cm`);
            // 这里可以使用axios或fetch等方法发送实际的HTTP请求
        }
    })

    return {
        temp,
        height,
        changeTemp,
        changeHeight
    };
}