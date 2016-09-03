#include <pebble.h>

// RANDOM COLOR
static GColor random_color() {
  	return (GColor){.argb = ((rand() % 0b00111111) + 0b11000000)};
}