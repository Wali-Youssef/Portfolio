const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface Schemaprojet{
id?: string;
nom_projet: string;
description_projet: string;
annee_film: number;
image_film: string;
note_film: number;
description2_film: string;


}