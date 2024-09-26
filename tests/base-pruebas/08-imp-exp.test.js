import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/bases/08-imp-exp";

describe("08-imp-exp", () => {
  test("should getHeroeById return a hero", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("should getHeroeById return undefined if id not exist", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBeUndefined();
    expect(hero).toBeFalsy();
    expect(0).toBeFalsy();
    expect(false).toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
  });

  test("should getHeroesByOwner return marvels heroes", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
    expect(heroes.length).toEqual(2);
  });

  test("should getHeroesByOwner return DC heroes", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    expect(heroes).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(heroes.length).toEqual(3);
    expect(heroes).toEqual( heroes.filter(hero => hero.owner === owner));
  });
});
