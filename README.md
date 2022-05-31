# GroupByCategory
group by  with Javascript


#usage

```javascript
const groupByCategoryFormatted=require('group-by-category');
const ExampleArray=groupByCategoryFormatted([{key:1,value:'Fenerbahçe'},{key:2,value:'Fenerbahçe'},{key:3,value:'Neşet Ertaş'}],'value')
[
   {
        value: "Fenerbahçe",
        array: [
            {
                key: 1,
                value: "Fenerbahçe"
            },
            {
                key: 2,
                value: "Fenerbahçe"
            }
        ]
    },
    {
        value: "Neşet Ertaş",
        array: [
            {
                key: 3,
                value: "Neşet Ertaş"
            }
        ]
    }
]
ex:ExampleArray.find(item=>item.value=="Fenerbahçe").array



const ExampleArrayKey =groupByCategoryFormatted([{key:1,value:'Fenerbahçe'},{key:2,value:'Fenerbahçe'},{key:3,value:'Neşet Ertaş'}],'key')
[
    {
        key: 1,
        array: [
            {
                key: 1,
                value: "Fenerbahçe"
            }
        ]
    },
    {
        key: 2,
        array: [
            {
                key: 2,
                value: "Fenerbahçe"
            }
        ]
    },
    {
        key: 3,
        array: [
            {
                key: 3,
                value: "Neşet Ertaş"
            }
        ]
    }
]
ex:ExampleArrayKey.find(item=>item.key==1).array
```