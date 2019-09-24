import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

function getItems() {
	return [
		new Item("+5 Dexterity Vest", 10, 20),
		new Item("Aged Brie", 2, 0),
		new Item("Elixir of the Mongoose", 5, 7),
		new Item("Sulfuras, Hand of Ragnaros", 0, 80),
		new Item("Sulfuras, Hand of Ragnaros", -1, 80),
		new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
		new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
		new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)	]
}

describe('Gilded Rose', function () {
	let gildedRose;
	let items;

	describe('After one day sellIn and quality for item', () => {
		beforeEach(() => {
			items = getItems();
			gildedRose = new GildedRose(items);
			 gildedRose.updateQuality();
		})
	
		it("'+5 Dexterity Vest' should be 9 and 19 respectively", function() {
			expect(items[0].name).to.equal('+5 Dexterity Vest');
			expect(gildedRose.items[0].sellIn).to.equal(9);
			expect(gildedRose.items[0].quality).to.equal(19);
		});	
	
		it("'Aged Brie' should be 1 and 0 respectively", function() {
			expect(items[1].name).to.equal('Aged Brie');
			expect(gildedRose.items[1].sellIn).to.equal(1);
			expect(gildedRose.items[1].quality).to.equal(1);
		});	

		it("'Elixir of the Mongoose' should be 4 and 6 respectively", function() {
			expect(items[2].name).to.equal('Elixir of the Mongoose');
			expect(gildedRose.items[2].sellIn).to.equal(4);
			expect(gildedRose.items[2].quality).to.equal(6);
		});

		it("Sulfuras, Hand of Ragnaros' should be 0 and 80 respectively", function() {
			expect(items[3].name).to.equal('Sulfuras, Hand of Ragnaros');
			expect(gildedRose.items[3].sellIn).to.equal(0);
			expect(gildedRose.items[3].quality).to.equal(80);
		});	

		it("Sulfuras, Hand of Ragnaros' should be -1 and 80 respectively", function() {
			expect(items[4].name).to.equal('Sulfuras, Hand of Ragnaros');
			expect(gildedRose.items[4].sellIn).to.equal(-1);
			expect(gildedRose.items[4].quality).to.equal(80);
		});

		it("Backstage passes to a TAFKAL80ETC concert' should be 14 and 21 respectively", function() {
			expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[5].sellIn).to.equal(14);
			expect(gildedRose.items[5].quality).to.equal(21);
		});

		it("Backstage passes to a TAFKAL80ETC concert' should be 9 and 50 respectively", function() {
			expect(items[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[6].sellIn).to.equal(9);
			expect(gildedRose.items[6].quality).to.equal(50);
		});

		it("Backstage passes to a TAFKAL80ETC concert' should be 4 and 50 respectively", function() {
			expect(items[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[7].sellIn).to.equal(4);
			expect(gildedRose.items[7].quality).to.equal(50);
		});
	})

	describe('After 2nd day sellIn and quality for item', () => {
		beforeEach(() => {
			items = getItems();
			gildedRose = new GildedRose(items);
			gildedRose.updateQuality();
			gildedRose.updateQuality();
		})
	
		it("'+5 Dexterity Vest' should be 8 and 18 respectively", function() {
			expect(items[0].name).to.equal('+5 Dexterity Vest');
			expect(gildedRose.items[0].sellIn).to.equal(8);
			expect(gildedRose.items[0].quality).to.equal(18);
		});	
	
		it("'Aged Brie' should be 0 and 0 respectively", function() {
			expect(items[1].name).to.equal('Aged Brie');
			expect(gildedRose.items[1].sellIn).to.equal(0);
			expect(gildedRose.items[1].quality).to.equal(2);
		});	

		it("'Elixir of the Mongoose' should be 3 and 5 respectively", function() {
			expect(items[2].name).to.equal('Elixir of the Mongoose');
			expect(gildedRose.items[2].sellIn).to.equal(3);
			expect(gildedRose.items[2].quality).to.equal(5);
		});

		it("Sulfuras, Hand of Ragnaros' should be 0 and 80 respectively", function() {
			expect(items[3].name).to.equal('Sulfuras, Hand of Ragnaros');
			expect(gildedRose.items[3].sellIn).to.equal(0);
			expect(gildedRose.items[3].quality).to.equal(80);
		});	

		it("Sulfuras, Hand of Ragnaros' should be -1 and 80 respectively", function() {
			expect(items[4].name).to.equal('Sulfuras, Hand of Ragnaros');
			expect(gildedRose.items[4].sellIn).to.equal(-1);
			expect(gildedRose.items[4].quality).to.equal(80);
		});

		it("Backstage passes to a TAFKAL80ETC concert' should be 13 and 22 respectively", function() {
			expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[5].sellIn).to.equal(13);
			expect(gildedRose.items[5].quality).to.equal(22);
		});

		it("Backstage passes to a TAFKAL80ETC concert' should be 8 and 50 respectively", function() {
			expect(items[6].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[6].sellIn).to.equal(8);
			expect(gildedRose.items[6].quality).to.equal(50);
		});

		it("Backstage passes to a TAFKAL80ETC concert' should be 3 and 50 respectively", function() {
			expect(items[7].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[7].sellIn).to.equal(3);
			expect(gildedRose.items[7].quality).to.equal(50);
		});
	})

	describe('After 5 day sellIn and quality for item', () => {
		beforeEach(() => {
			items = getItems();
			gildedRose = new GildedRose(items);
			for(let i=0;i<5;i++) {
				gildedRose.updateQuality();
			}
		})
	
		it("'Backstage passes to a TAFKAL80ETC concert' should be 10 and 25 respectively", function() {
			expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[5].sellIn).to.equal(10);
			expect(gildedRose.items[5].quality).to.equal(25);
		});
	});	

	describe('After 6 day sellIn and quality for item', () => {
		beforeEach(() => {
			items = getItems();
			gildedRose = new GildedRose(items);
			for(let i=0;i<6;i++) {
				gildedRose.updateQuality();
			}
		})
	
		it("'Backstage passes to a TAFKAL80ETC concert' should be 9 and 27 respectively", function() {
			expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[5].sellIn).to.equal(9);
			expect(gildedRose.items[5].quality).to.equal(27);
		});
	});		

	describe('After 10 day sellIn and quality for item', () => {
		beforeEach(() => {
			items = getItems();
			gildedRose = new GildedRose(items);
			for(let i=0;i<10;i++) {
				gildedRose.updateQuality();
			}
		})
	
		it("'Backstage passes to a TAFKAL80ETC concert' should be 5 and 35 respectively", function() {
			expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[5].sellIn).to.equal(5);
			expect(gildedRose.items[5].quality).to.equal(35);
		});
	});

	describe('After 11 day sellIn and quality for item', () => {
		beforeEach(() => {
			items = getItems();
			gildedRose = new GildedRose(items);
			for(let i=0;i<11;i++) {
				gildedRose.updateQuality();
			}
		})
	
		it("'Backstage passes to a TAFKAL80ETC concert' should be 4 and 38 respectively", function() {
			expect(items[5].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
			expect(gildedRose.items[5].sellIn).to.equal(4);
			expect(gildedRose.items[5].quality).to.equal(38);
		});
	});	
});