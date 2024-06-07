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
    ],
    images: [
        {
            image: "client-1-2x.png",
        },
        {
            image: "client-3-2x.png",
        },
        {
            image: "client-4-2x.png",
        },
        {
            image: "client-5-2x.png",
        },
        {
            image: "client-7-2x.png",
        },
        {
            image: "client-9-2x.png",
        },

    ],

    info: [
        {
            image: "cropped-Group-39-2x.png",
            didascalia: "While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me."
        },
        {
            titolo: "QUICK LINKS",
            links: ["Careers", "News", "Termd of use", "Privacy Projects", "About", "Contact"]
        },
        {
            titolo: "CONTACT",
            indirizzo: " Patrivia C. Amadee 4401 Waldeck Street Grapevine Nashville, TX 76051 ",
            email: " info@yourdomain.com",
            cellulare: "+99(0)101 0000 888"
        },
        {
            titolo: "LOCATION ON MAP",
            image: "map.png"
        }
    ]

};

const iMieiDati = reactive(ilMioOggettone);

export default iMieiDati;