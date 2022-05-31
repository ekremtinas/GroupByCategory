# GroupByCategory
group by  with Javascript


#usage
const groupByCategoryFormatted=require('group-by-category');
groupByCategoryFormatted([{key:1,value:'Fenerbahçe'},{key:2,value:'Fenerbahçe'},{key:3,value:'Neşet Ertaş'}],'value')
>[
>   {
>        value: "Fenerbahçe",
>        array: [
>            {
>                key: 1,
>                value: "Fenerbahçe"
>            },
>            {
>                key: 2,
>                value: "Fenerbahçe"
>            }
>        ]
>    },
>    {
>        value: "Neşet Ertaş",
>        array: [
>            {
>                key: 3,
>                value: "Neşet Ertaş"
>            }
>        ]
>    }
>]
>ex:array.find(item=>item.value=="Fenerbahçe").array



groupByCategoryFormatted([{key:1,value:'Fenerbahçe'},{key:2,value:'Fenerbahçe'},{key:3,value:'Neşet Ertaş'}],'key')
>[
>    {
>        key: "1",
>        array: [
>            {
>                key: 1,
>                value: "Fenerbahçe"
>            }
>        ]
>    },
>    {
>        key: "2",
>        array: [
>            {
>                key: 2,
>                value: "Fenerbahçe"
>            }
>        ]
>    },
>    {
>        key: "3",
>        array: [
>            {
>                key: 3,
>                value: "Neşet Ertaş"
>            }
>        ]
>    }
>]