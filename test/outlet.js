module.exports = {
  Create: function (n) {
    n.click('a#tab-configuration')
      .wait(500)
      .click('a#config-connectors')
      .wait(500)
      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O1')
      .type('input#outletPin', '6')
      .click('input#createOutlet')
      .wait(1500)

      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O2')
      .wait(500)
      .type('input#outletPin', '12')
      .wait(1000)
      .click('input#createOutlet')
      .wait(1500)

      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O3')
      .wait(500)
      .type('input#outletPin', '13')
      .wait(1000)
      .click('input#createOutlet')
      .wait(1500)

      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O4')
      .wait(500)
      .type('input#outletPin', '19')
      .wait(1000)
      .click('input#createOutlet')
      .wait(1500)

      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O5')
      .wait(500)
      .type('input#outletPin', '16')
      .wait(1000)
      .click('input#createOutlet')
      .wait(1500)

      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O6')
      .wait(500)
      .type('input#outletPin', '26')
      .wait(1000)
      .click('input#createOutlet')
      .wait(1500)

      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O7')
      .wait(500)
      .type('input#outletPin', '20')
      .wait(1000)
      .click('input#createOutlet')
      .wait(1500)

      .click('input#add_outlet')
      .wait(500)
      .type('input#outletName', 'O8')
      .wait(500)
      .type('input#outletPin', '21')
      .wait(1000)
      .click('input#createOutlet')
    return function () {
      return ('Outlets created')
    }
  }
}
