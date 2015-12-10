/**
 * Created by aieiko on 08.12.15.
 */
/**
 * Created by aieiko on 06.12.15.
 */
module.exports = {
    //data localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('data', JSON.stringify([
            {
                id: '0011001',
                name: 'Lager',
                date: ['27', '0', '2015'],
                participants: '',
                description: 'The finest lage'
            },
            {
                id: '0011011',
                name: 'Ser go home',
                date: ['20', '11', '2015'],
                participants: 'Incognito',
                description: 'The finest lage'
            },
            {
                id: '0011002',
                name: 'Noooo, go drink beer',
                date: ['11', '10', '2015'],
                participants: 'Alan NeOkPacan',
                description: 'The finest lage'
            }
        ]));
    }

};