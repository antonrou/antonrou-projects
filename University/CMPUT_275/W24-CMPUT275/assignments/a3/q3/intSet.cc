#include "intSet.h"
using namespace std;

intSet::intSet() : data(nullptr), size(0), capacity(0) {}//default constructor
intSet::intSet(const intSet& is) : size(is.size), capacity(is.capacity){ //copy constructor. size and capacity of the new object are the same as the size and capacity of the "is" object
    data = new int[capacity]; //dynamically allocate an int array that is the same size as that of the array of the "is" object
    for (int i = 0; i<size; i++){
        data[i] = is.data[i]; //iterate through each element of the data array of the "is" object and set the data of our new object equal to it
    }
}

intSet::intSet(intSet&& is): data(is.data), size(is.size), capacity(is.capacity){//move constructor - a new object is constructed with the data from the old object. We use a rvalue reference because it refers to a temporary object and it is more efficient to move resources from a temporary object. Instead of deep copying, objects can "steal" resources from temporary objects.
    //'this' object now owns the 'data' from the 'is' object
    is.data = nullptr; //make pointer for the is.data null
    is.size = 0; //reset size of "is" object
    is.capacity = 0;// reset capacity of "is" object
}

intSet::~intSet(){
    delete[] data; //deallocating the dynmaically allocated memory
}

intSet& intSet::operator=(intSet&& is){//return a reference to intSet object to allow chaining of assignment operations. we are overloading the assignment operator. Credit to ChatGPT for help with this function
    if(this != &is){ //check for self-assignment
        //deallocate the current data
        delete[] data;
        //transfer ownership of data from is object
        data = is.data;
        size = is.size;
        capacity = is.capacity;

        //nullify the data in the source object
        is.data = nullptr;
        is.size = 0;
        is.capacity = 0;
    }
    return *this;
//first check if current object is the same as the source object, to prevent issues when trying ot move an object into itself.
}

intSet& intSet::operator=(const intSet& is){
    if(this != &is){
        //deallocate current data
        delete[] data;
        //copy size and capacity from other
        size = is.size;
        capacity = is.capacity;

        //allocate new memory for data array
        data = new int[capacity];
        //deep copy
        for(int i=0; i < size; i++){
            data[i] = is.data[i];
        }//for
    }
    return *this;

}

intSet intSet::operator|(const intSet &other) const{
    intSet result;
    for (int i = 0; i < size; i++){
        result.add(data[i]);
    }
    for (int i = 0; i < other.size; i++){
        result.add(other.data[i]);
    }

    return result;
}

intSet intSet::operator&(const intSet &other) const{
    intSet result;
    for (int i = 0; i < size; i++){
        int element = data[i];
        if(other.contains(element)){
            result.add(element);
        }
    }
    return result;
}

bool intSet::isSubset(const intSet& subSet) const{
    //checking if *this is a subset of s
    for (int i = 0; i < subSet.size; i++) {
        int element = subSet.data[i];
        if (!this->contains(element)) {
            return false;
        }
    }
    return true;
}

bool intSet::operator==(const intSet &other) const{
    if(isSubset(other) && other.isSubset(*this)){ //if both sets are subsets of each other then they're equal
        return true;
    }
    return false;
}

void intSet::add(int e){
    if(!contains(e)){
        if(size >= capacity){
            resize();
        }
        data[size] = e;
        size++;
    }
}

bool intSet::contains(int e) const{
    for(int i = 0; i < size; i++){
        if (e == data[i]){
            return true;
        }
    }
    return false;
}

void intSet::resize(){
    int newCapacity;
    if (capacity <= 0) {
        newCapacity = 1;
    }
    else{
        newCapacity = capacity*2;
    }
    int *newData = new int[newCapacity];//local pointer variable to point to the dynamically allocated array
    //deep copy
    for (int i = 0; i< size; i++){
        newData[i] = data[i];
    }
    delete[] data;
    data = newData;
    capacity = newCapacity;
}

void intSet::remove(int e){
    if(!contains(e)){ //look for e, if the set doesn't contain e, we return early;
        return;
    }
    int index = -1;
    for(int i =0; i< size; i++){
        if(data[i] == e){
            index = i;
            break;
        }
    }
    for(int i = index; i < size - 1; i++){
        data[i] = data[i+1];
    }
    size--;
}

intSet intSet::bubbleSort() const {//credit to ChatGPT for help with function
    intSet sortedSet(*this);

    for(int i = 0; i < sortedSet.size -1; i++){
        for(int j = 0; j < sortedSet.size -i -1; j++){
            if (sortedSet.data[j] > sortedSet.data[j + 1]){
                int temp = sortedSet.data[j];
                sortedSet.data[j] = sortedSet.data[j+1];
                sortedSet.data[j+1] = temp;
            }
        }
    }
    return sortedSet;
}



std::ostream& operator<<(std::ostream& out, const intSet& is){
    intSet sortedSet = is.bubbleSort();
    out<<"(";
    for (int i = 0; i < is.size; i++){
        if(i == (is.size)-1){
            out<<sortedSet.data[i];
        }
        else{
            out<<sortedSet.data[i]<<", ";
        }
    }//for
    out<<")";
    
    return out;
}