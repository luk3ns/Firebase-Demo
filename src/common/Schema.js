export const item = {
    main: {
        id: 'main',
        name: 'Item Details',
        fields: {
            name: {
                id: 'name',
                type: 'text',
                name: 'Name',
                required: true,
                uniq: true
            },
            internalid: {
                id: 'internalid',
                type: 'number',
                name: 'Internal ID',
                editable: false
            },
            description: {
                id: 'description',
                type: 'text',
                name: 'Description'
            },
            class: {
                id: 'class',
                type: 'reference',
                source: 'class',
                name: 'Class'
            },
            barcode: {
                id: 'barcode',
                type: 'text',
                name: 'Barcode'
            },
            coo: {
                id: 'coo',
                type: 'country',
                name: 'Country of origin'
            },
            available: {
                id: 'available',
                type: 'number',
                name: 'Quantity Available',
                editable: false
            },
            onhand: {
                id: 'on_hand',
                type: 'number',
                name: 'Quantity On Hand',
                editable: false
            },
            ordered: {
                id: 'on_order',
                type: 'number',
                name: 'Quantity On Order',
                editable: false
            },
            committed: {
                id: 'committed',
                type: 'number',
                name: 'Quantity Committed',
                editable: false
            },
            backordered: {
                id: 'backordered',
                type: 'number',
                name: 'Quantity Back Ordered',
                editable: false
            },
            manufacturer: {
                id: 'manufacturer',
                type: 'text',
                name: 'Manufacturer'
            },
            pricing_group: {
                id: 'pricing_group',
                type: 'reference',
                source: 'pricing_group',
                name: 'Pricing Group'
            }
        }
    },
    pricing: {
        id: 'pricing',
        name: 'Pricing',
        fields: [{
            price: {
                id: 'price',
                type: 'currency',
                name: 'Unit Price',
                required: true
            },
            quantity: {
                id: 'quantity',
                type: 'number',
                name: 'Min. Quantity',
                required: true
            },
            currency: {
                id: 'currency',
                type: 'reference',
                source: 'currency',
                name: 'Currency',
                required: true
            }
        }]
    },
    vendors: {
        id: 'vendors',
        name: 'Vendors',
        fields: [{
            vendor: {
                id: 'vendor',
                type: 'reference',
                soruce: 'vendor',
                name: 'Vendor',
                required: true
            },
            mpn: {
                id: 'mpn',
                type: 'text',
                name: 'Manufacturer Part Number'
            },
            preferred: {
                id: 'preferred',
                type: 'boolean',
                name: 'Preferred'
            },
            price: {
                id: 'price',
                type: 'currency',
                name: 'Purchase Price'
            },
            currency: {
                id: 'currency',
                type: 'reference',
                source: 'currency',
                name: 'Currency',
                required: true
            }
        }]
    }
}

export const contact = {
    main: {
        id: 'main',
        name: 'Contact Details',
        fields: {
            name: {
                id: 'name',
                type: 'text',
                name: 'Name',
                required: true
            },
            email: {
                id: 'email',
                type: 'email',
                name: 'Email'
            },
            phone: {
                id: 'phone',
                type: 'text',
                name: 'Phone Number'
            },
            first_name: {
                id: 'first_name',
                type: 'text',
                name: 'First Name'
            },
            last_name: {
                id: 'last_name',
                type: 'text',
                name: 'Last Name'
            },
            company: {
                id: 'company',
                type: 'reference',
                source: 'customer',
                name: 'Company',
                required: true
            },
            job_title: {
                id: 'job_title',
                type: 'text',
                name: 'Job Title'
            }
        }
    }
}

export const customer = {
    main: {
        id: 'main',
        name: 'Customer Details',
        fields: {
            name: {
                id: 'name',
                type: 'text',
                name: 'Name',
                required: true,
                uniq: true
            },
            email: {
                id: 'email',
                type: 'email',
                name: 'Email'
            },
            phone: {
                id: 'phone',
                type: 'text',
                name: 'Phone Number'
            },
            tax_nomber: {
                id: 'tax_number',
                type: 'text',
                name: 'Tax Number'
            },
            currency: {
                id: 'currency',
                type: 'reference',
                source: 'currency',
                name: 'Currency'
            }
        }
    },
    groups: {
        id: 'groups',
        name: 'Pricing Groups',
        fields: [{
            name: {
                id: 'name',
                type: 'reference',
                source: 'pricing_group',
                name: 'Pricing Group',
                required: true,
                uniq: true
            },
            level: {
                id: 'level',
                type: 'procent',
                name: 'Price Level',
                required: true
            }
        }]
    },
    items: {
        id: 'items',
        name: 'Item Pricing',
        fields: [{
            name: {
                id: 'name',
                type: 'reference',
                source: 'items',
                name: 'Item Name',
                required: true
            },
            price: {
                id: 'price',
                type: 'currency',
                name: 'Unit price',
                required: true
            },
            currency: {
                id: 'currency',
                type: 'reference',
                source: 'currency',
                name: 'Currency'
            }
        }]
    }
}

export const address = {
    main: {
        id: 'main',
        name: 'Address Details',
        fields: {
            name: {
                id: 'name',
                type: 'text',
                name: 'Addressee',
                required: true
            },
            address: {
                id: 'address',
                type: 'text',
                name: 'Address',
                required: true
            },
            city: {
                id: 'city',
                type: 'text',
                name: 'City',
                required: true
            },
            zip: {
                id: 'zip',
                type: 'text',
                name: 'Zip code',
                required: true
            },
            country: {
                id: 'country',
                type: 'country',
                name: 'Country',
                required: true
            },
            phone: {
                id: 'phone',
                type: 'text',
                name: 'Country'
            }
        }
    }
}

export const salesorder = {
    main: {
        id: 'main',
        name: 'Sales Order Details',
        fields: {
            name: {
                id: 'name',
                type: 'text',
                name: 'Transaction Number',
                required: true,
                uniq: true,
                editable: false,
                order: 1
            },
            date: {
                id: 'date',
                type: 'date',
                name: 'Transaction Date',
                required: true,
                order: 2
            },
            customer: {
                id: 'customer',
                type: 'reference',
                source: 'customers',
                name: 'Customer',
                required: true,
                order: 3
            }
        }
    },
    shipping: {
        id: 'shipping',
        name: 'Shipping Detials',
        fields: {
            name: {
                id: 'name',
                type: 'text',
                name: 'Addressee'
            },
            address: {
                id: 'address',
                type: 'text',
                name: 'Address',
            },
            city: {
                id: 'city',
                type: 'text',
                name: 'City'
            },
            zip: {
                id: 'zip',
                type: 'text',
                name: 'Zip code'
            },
            country: {
                id: 'country',
                type: 'country',
                name: 'Country'
            },
            phone: {
                id: 'phone',
                type: 'text',
                name: 'Country'
            }
        }
    },
    billing: {
        id: 'billing',
        name: 'Billing Details',
        fields: {
            name: {
                id: 'name',
                type: 'text',
                name: 'Addressee'
            },
            address: {
                id: 'address',
                type: 'text',
                name: 'Address'
            },
            city: {
                id: 'city',
                type: 'text',
                name: 'City'
            },
            zip: {
                id: 'zip',
                type: 'text',
                name: 'Zip code'
            },
            country: {
                id: 'country',
                type: 'country',
                name: 'Country'
            },
            phone: {
                id: 'phone',
                type: 'text',
                name: 'Country'
            }
        }
    },
    items: {
        id: 'items',
        name: 'Items',
        fields: [{
            name: {
                id: 'name',
                type: 'reference',
                source: 'items',
                name: 'Item Name',
                required: true,
                order: 1
            },
            description: {
                id: 'description',
                type: 'text',
                name: 'Description',
                order: 2
            },
            quantity: {
                id: 'quantity',
                type: 'number',
                name: 'Quantity',
                required: true,
                order: 3
            },
            price: {
                id: 'price',
                type: 'currency',
                name: 'Unit price',
                required: true,
                order: 4
            },
            amount: {
                id: 'amount',
                type: 'currency',
                name: 'Amount',
                required: true,
                order: 5
            }
        }]
    }
}