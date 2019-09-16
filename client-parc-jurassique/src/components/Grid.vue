<template>
    <div>
        <v-container>
            <v-row no-gutters>
            <v-col
            v-for="n in 3"
            :keys="n"
            cols="12"
            sm="4">

            <v-card
            outlined
            tile>
            One of three columns

            </v-card>

            </v-col>
            </v-row>
        </v-container>
    </div>
</template>
