const ValidatorRules = {
    userName: [
        { required: true, message: '请输入账号...', trigger: 'blur' },
    ],
    userPassword: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9]+$/, message: '请输入数字', trigger: 'blur' }
    ],
    userPhone: [
        { required: true, message: '请输入号码', trigger: 'blur' },
        { min: 11, max: 11, message: '长度是11', trigger: 'blur' }
    ],
    userEmail: [
        { required: true, message: '请输入邮箱', trigger: 'blur' },
    ],
    userAddress: [
        { required: true, message: '请输入地址', trigger: 'blur' },
    ],
    userRole: [
        { required: true, message: '请选择角色', trigger: 'blur' },
    ],
    foodName: [
        { required: true, message: '名称不能为空', trigger: 'blur' },
    ],
    foodPrice: [
        { required: true, message: '价格不能为空', trigger: 'blur' },
        { pattern: /^[a-zA-Z0-9]+$/, message: '请输入数字', trigger: 'blur' }
    ],
    foodKind: [
        { required: true, message: '种类不能为空', trigger: 'blur' },
    ],
    bookAuthor: [
        { required: true, message: '不能为空', trigger: 'blur' },
    ],
    foodDec: [
        { required: true, message: '描述不能为空', trigger: 'blur' },
    ],
    foodKindName: [
        { required: true, message: '种类名称为空', trigger: 'blur' },
    ]

}

export default ValidatorRules;