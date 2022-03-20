<template>
    <li class="mb-6 pl-4 border-l-4">
        <h2>
            <slot name="header"></slot>
        </h2>
        <h3>
            <slot name="code"></slot>
        </h3>
        <slot></slot>
    </li>
</template>

<script>
export default {

}
</script>