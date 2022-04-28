//functions created to replicate 

/*    buildHierarchy Array Data

var items = [
    {"Id": "1", "Name": "abc", "Parent": "2"},
    {"Id": "2", "Name": "abc", "Parent": ""},
    {"Id": "3", "Name": "abc", "Parent": "5"},
    {"Id": "4", "Name": "abc", "Parent": "2"},
    {"Id": "5", "Name": "abc", "Parent": ""},
    {"Id": "6", "Name": "abc", "Parent": "2"},
    {"Id": "7", "Name": "abc", "Parent": "6"},
    {"Id": "8", "Name": "abc", "Parent": "6"}
];

*/
function buildHierarchy(arry) {

    var roots = [], children = {};

    // find the top level nodes and hash the children based on parent
    for (var i = 0, len = arry.length; i < len; ++i) {
        var item = arry[i],
            p = item.Parent,
            target = !p ? roots : (children[p] || (children[p] = []));

        target.push({ value: item });
    }

    // function to recursively build the tree
    var findChildren = function(parent) {
        if (children[parent.value.Id]) {
            parent.children = children[parent.value.Id];
            for (var i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };

};

const buildHierarchyEs6 = (data) => {
    const tree = [];
    const childOf = {};
    data.forEach((item) => {
        const { Id, Parent } = item;
        childOf[Id] = childOf[Id] || [];
        item.children = childOf[Id];
        Parent ? (childOf[Parent] = childOf[Parent] || []).push(item) : tree.push(item);
    });
    return tree;
};


//es6 version with parameters
const buildParamHierarchyEs6 = (data = [], { idKey = 'id', parentKey = 'parentId', childrenKey = 'children' } = {}) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const { [idKey]: id, [parentKey]: parentId = 0 } = item;
        childrenOf[id] = childrenOf[id] || [];
        item[childrenKey] = childrenOf[id];
        parentId ? (childrenOf[parentId] = childrenOf[parentId] || []).push(item) : tree.push(item);
    });
    return tree;
}


    