<template>
    <button
            class="fwcpb-button"
            :disabled="disabled"
            @click="handleClick"
            :class="classObject" :style="styleObject"
    >
        <i class="icon" :class="icon" v-if="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: "fwcpb-button",
        props: {
            icon: {
                type: String,
                default: ''
            },
            width: {
                type: String,
                default: '100'
            },
            height: {
                type: String,
                default: '40'
            },
            size: {
                type: String,
                default: ''
            },
            cursor: {
                type: String,
                default: 'pointer'
            },
            backcolor: {
                type: String,
                default: '#067ff0'
            },
            color: {
                type: String,
                default: ''
            },
            bordercolor: {
                type: String,
                default: ''
            },
            check: {
                // 选中状态
                type: Boolean,
                default: false
            },
            classhover: {
                type: String,
                default: ''
            },
            radius: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            }, // 单位
            unitlength: {
                type: String,
                default: 'px'
            }
        },
        computed: {
            classObject: function styleObject() {
                return [
                    this.classhover,
                    {'fwcpb-button-hover': this.check}
                ]
            },
            styleObject: function styleObject() {
                return {
                    'cursor': this.cursor,
                    'width': this.unitlength === 'px' ? (this.width - 2 + this.unitlength) : (this.width - 0.02 + this.unitlength),
                    'height': this.unitlength === 'px' ? (this.height - 2 + this.unitlength) : (this.height - 0.02 + this.unitlength),
                    'line-height': this.unitlength === 'px' ? (this.height - 2 + this.unitlength) : (this.height - 0.02 + this.unitlength),
                    'font-size': this.size + this.unitlength,
                    'background-color': this.backcolor,
                    'color': this.color ? this.color : '#fff',
                    'border': this.bordercolor ? (this.unitlength === 'px' ? ('1'+this.unitlength+' solid' + this.bordercolor) : ('0.01'+this.unitlength+' solid' + this.bordercolor)) : 'none',
                    'text-align': 'center',
                    'border-radius': this.radius ? this.radius + this.unitlength : (this.unitlength === 'px' ? ('4'+this.unitlength) : ('0.04'+this.unitlength))
                };
            }
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    }
</script>

<style scoped>
    .fwcpb-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        font-size: 14px;
        border-radius: 4px;
    }

    .fwcpb-button-disabled {
        color: #c0c4cc!important;
        cursor: not-allowed!important;
        background-image: none;
        background-color: #fff!important;
        border-color: #ebeef5!important;
    }
</style>
