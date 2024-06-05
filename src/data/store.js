import { reactive } from 'vue';

const ilMioOggettone = {
    linkHeader: [
        'Home',
        'About',
        'Service',
        'Showcase',
        'Blog',
        'Contact'
    ],
    slidesJumbo: [
        {
            image: 'Group-36-2x.png',
            title: 'We Are a Web Designe ',
            lastWord: 'Agency',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.'
        },
        {
            image: 'Group-40-2x.png',
            title: 'A Group of Expert ',
            lastWord: 'Planners',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.'
        },
        {
            image: 'Group-35-2x.png',
            title: 'Focus on your ',
            lastWord: 'business',
            text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.'
        }
    ]
};

const iMieiDati = reactive(ilMioOggettone);

export default iMieiDati;