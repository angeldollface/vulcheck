/*
VULCHECK by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

import * as vulcheck from './mod.ts';
import { assertEquals } from "@std/assert";

Deno.test(
	"Testing the \"getCharPosition\" function.",
	() => {
		assertEquals(vulcheck.getCharPositon("c"),3);
	}
);

Deno.test(
	"Testing the \"getCharSpace\" function.",
	() => {
		assertEquals(vulcheck.getCharSpace("c", "u"),18);
	}
);

Deno.test(
	"Testing the \"getNumberSpace\" function.",
	() => {
		assertEquals(vulcheck.getNumberSpace(4,5),1);
	}
);

Deno.test(
	"Testing the \"stringType\" function. (special character)",
	() => {
		assertEquals(vulcheck.stringType("@"),"specialChar");
	}
);

Deno.test(
	"Testing the \"stringType\" function. (integer)",
	() => {
		assertEquals(vulcheck.stringType("2"),"int");
	}
);

Deno.test(
	"Testing the \"stringType\" function. (normal character)",
	() => {
		assertEquals(vulcheck.stringType("e"),"normChar");
	}
);

Deno.test(
	"Testing the \"isInt\" function. (false case)",
	() => {
		assertEquals(vulcheck.isInt("e"),false);
	}
);

Deno.test(
	"Testing the \"isInt\" function. (true case)",
	() => {
		assertEquals(vulcheck.isInt("1"),true);
	}
);

Deno.test(
	"Testing the \"passwordStrength\" function. (weak)",
	() => {
		assertEquals(vulcheck.passwordStrength("12345", 2, 3, 4),0);
	}
);

Deno.test(
	"Testing the \"passwordStrength\" function. (strong)",
	() => {
		assertEquals(vulcheck.passwordStrength("5670USAirForce!_*", 2, 3, 4),20);
	}
);

Deno.test(
	"Testing the \"isSecure\" function. (true case)",
	() => {
		assertEquals(vulcheck.isSecure("5670USAirForce!_*", 2, 3, 4, 8),true);
	}
);

Deno.test(
	"Testing the \"isSecure\" function. (false case)",
	() => {
		assertEquals(vulcheck.isSecure("12345", 2, 3, 4, 8),false);
	}
);
