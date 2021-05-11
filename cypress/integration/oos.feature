Feature: Open Ocean Studo Crew application

    As user I can see resources applied, interviewing and hired

    Scenario Outline: Crew count for <category>
        Given the crew application is launched
        When the crew application is loaded
        Then the crew count for "<category>" is "<count>"

        Examples:
            | category     | count |
            | Applied      | 4     |
            | Interviewing | 0     |
            | Hired        | 1     |

    Scenario: Crew application movement
        Given the crew application is launched
        When the crew application is loaded
        And I move "lloyd gonzalez" application from "Applied" to "Interviewing"
        Then the crew count for "Interviewing" is "1"
        When I move "lloyd gonzalez" application from "Interviewing" to "Hired"
        Then the crew count for "Hired" is "2"

    Scenario: Filtering crew applications by partial name
        Given the crew application is launched
        When the crew application is loaded
        And I search for name "lloyd"
        Then the crew count for "Applied" is "1"

    Scenario: Filtering crew applications by full name
        Given the crew application is launched
        When the crew application is loaded
        And I search for name "lloyd gonzalez"
        Then the crew count for "Applied" is "1"

    Scenario: Filtering crew applications by city
        Given the crew application is launched
        When the crew application is loaded
        And I search for location "cardiff"
        Then the crew count for "Applied" is "1"

