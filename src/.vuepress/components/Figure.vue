<template>
    <figure>
        <img v-if="$attrs.src" :src="$attrs.src" />
        <slot v-else />
        <figcaption>{{ $attrs.figcaption }}</figcaption>
    </figure>
</template>
