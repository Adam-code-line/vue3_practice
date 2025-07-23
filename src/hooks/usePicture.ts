
import { reactive } from 'vue';

import axios from 'axios';

export default function () {
    let pictureList = reactive([
        { id: 1, url: 'https://ts3.tc.mm.bing.net/th/id/OIP-C.DUD9moMtJrn2dRhFf9xppAHaFX?rs=1&pid=ImgDetMain&o=7&rm=3' },
    ]);

    async function fetchPictures() {
        try {
            const response = await axios.get('https://ts3.tc.mm.bing.net/th/id/OIP-C.RFdqew0nW8bSgTbSRjpN6QHaFO?rs=1&pid=ImgDetMain&o=7&rm=3'); // 替换为实际的API地址
            console.log('获取图片列表成功:', response.data);
        } catch (error) {
            console.error('获取图片列表失败:', error);
        }
    }

    return {
        pictureList,
        fetchPictures,
    };
}