function recursiva(max) {
    if (max >= 110000) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0);