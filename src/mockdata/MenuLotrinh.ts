const n5 = ['N5: Nấu cơm', 'N5: Quét nhà', 'N5: Ngủ dậy', 'N5: Đánh răng', 'N5: Thể dục']
const n4 = ['NG: Nấu cơm', 'NG: Quét nhà', 'N5: Ngủ dậy', 'N5: Đánh răng', 'N5: Thể dục']
const n3 = ['N3: Nấu cơm', 'N3: Quét nhà', 'N5: Ngủ dậy', 'N5: Đánh răng', 'N5: Thể dục']
const n2 = ['N2: Nấu cơm', 'N2: Quét nhà', 'N5: Ngủ dậy', 'N5: Đánh răng', 'N5: Thể dục']

const tiengnhat = ['N5: Tiếng nhật hàng ngày', 'N4: Tiếng Nhật trong cuộc sống',
    'N3: Quản trị cảm xúc', 'N2: Tiếng Nhật business'];

let MenuTN: any[] = [];
tiengnhat.map((value, index, array) => {
    MenuTN.push({
        key: index,
        label: value,
        children: n5.map((val1, index1) => ({ key: `${index}-${index1}`, label: val1 }))
    })
    console.log(value)
})

const kynangmem = ['Giao tiếp hằng ngày', 'Giao tiếp trong công việc', 'Kĩ năng lãnh đạo', 'Kĩ năng start-up']
let MenuKNM: any[] = []
kynangmem.map((value, index, array) => {
    MenuKNM.push({
        key: index,
        label: value,
        children: n5.map((val1, index1) => ({ key: `${index}-${index1}`, label: val1 }))
    })
    console.log(value)
})



export { MenuTN, MenuKNM };
