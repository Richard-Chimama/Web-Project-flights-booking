import os
import csv


from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

engine = create_engine("postgres://postgres:1122@localhost:9000/postgres", pool_size=10, max_overflow=20)
db = scoped_session(sessionmaker(bind=engine))

def main():
    #list all flights
    flights = db.execute("SELECT id, origin, destination, duration FROM flights").fetchall()
    for flight in flights:
        print(f"{flight.id}: {flight.origin} to {flight.destination}, {flight.duration} minutes.")
    
    #Prompt user to choose a flight.
    flight_id= int(input("\nFlight ID: "))
    flight = db.execute("SELECT origin, destination, duration FROM flights WHERE id= :id",
                        {"id":flight_id}).fetchone()
    
    #Make sure flight is valid
    if flight is None:
        print("Error: No such flight.")
        return
        
    passengers = db.execute("SELECT name FROM passengers WHERE id = :flight_id",
                            {"flight_id": flight_id}).fetchall()
    print("\nPassengers: ")
    for passenger in passengers:
        print(passenger.name)
    if len(passengers) == 0:
        print("No passengers.")
        
if __name__== "__main__":
    main()
