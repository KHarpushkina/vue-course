<template>
    <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        class="toast align-items-center"
        ref="toast"
        data-bs-autohide="false"
        :class="toastStyleClass"
    >
        <div class="toast-header">
            <div class="left-block">
                <div>
                    <font-awesome-icon :icon="toastIcon"></font-awesome-icon>
                </div>
                <div class="text-header-container">
                    <span>{{ toastHeader }}</span>
                    <slot name="header"></slot>
                </div>
            </div>
            <div class="right-block">
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
        <div class="toast-body">
            {{ notificationMessage }}
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
const bootstrap = require("bootstrap");

export default {
    name: "Notification",
    props: {
        notificationType: String,
        notificationMessage: String,
    },
    data() {
        return {
            toast: null,
            toastClassName: "",
        };
    },
    computed: {
        toastStyleClass: function() {
            if (this.notificationType === "warning") {
                return "warning-toast";
            } else if (this.notificationType === "error") {
                return "error-toast";
            } else if (this.notificationType === "success") {
                return "success-toast";
            }
            return "";
        },

        toastIcon: function() {
            if (this.notificationType === "warning") {
                return "exclamation-circle";
            } else if (this.notificationType === "error") {
                return "times-circle";
            } else if (this.notificationType === "success") {
                return "check-circle";
            }
            return "";
        },

        toastHeader: function() {
            if (this.notificationType === "warning") {
                return "Warning";
            } else if (this.notificationType === "error") {
                return "Error";
            } else if (this.notificationType === "success") {
                return "Success";
            }
            return "Notification";
        },
    },
    methods: {},
    mounted: function() {
        this.toast = new bootstrap.Toast(this.$refs["toast"]);
        this.toast.show();
    },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.toast-header {
    display: flex;
    justify-content: space-between;
    svg {
        color: var(--bs-yellow);
        width: 2rem;
        height: 2rem;
    }
    .left-block {
        display: flex;
        .text-header-container {
            padding: 3px;
            padding-left: 14px;
            span {
                font-size: 18px;
                font-weight: 500;
                color: var(--bs-dark);
            }
        }
    }
    .right-block {
        margin-right: 15px;
    }
}
.toast-body {
    background: white;
}
.warning-toast {
    .toast-header {
        svg {
            color: var(--bs-yellow);
        }
    }
}
.error-toast {
    .toast-header {
        svg {
            color: var(--bs-red);
        }
    }
}
.success-toast {
    .toast-header {
        svg {
            color: var(--bs-green);
        }
    }
}
</style>
