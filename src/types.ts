const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaFilm {
id?: string;
nom_film: string;
description_film: string;
annee_film: number;
image_film: string;
note_film: number;
description2_film: string;


}