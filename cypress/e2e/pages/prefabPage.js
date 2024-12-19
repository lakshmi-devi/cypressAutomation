class PrefabPage{

    getExpandIcon(){
        return 'i[class="fas fa-angle-right"]'
    }
    
    getProjectPlannerMenu(){
      return 'Project Planner'
    }

    clickExpandIcon(){
        cy.get(this.getExpandIcon()).should('be.visible')
        cy.get(this.getExpandIcon()).click()
    }

    clickProjectPlannerMenu(){
        cy.contains(this.getProjectPlannerMenu()).click()
    }
}

export default PrefabPage;