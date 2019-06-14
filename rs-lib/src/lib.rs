extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

// #[no_mangle]
// #[wasm_bindgen]
// extern "C" {
//     pub fn alert(s: &str);
// }

// #[no_mangle]
// #[wasm_bindgen]
// pub fn greet(name: &str) {
//     alert(&format!("Hello, {}!", name));
// }

#[no_mangle]
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}
