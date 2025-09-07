#include<stdio.h>
void Quicksort(int arr[],int lb,int ub){
    if(lb<ub){
        int pi = partition(arr, lb, ub);
        Quicksort(arr, lb, pi-1);
        Quicksort(arr, pi+1, ub);
    }
}
int partition(int arr[],int lb,int ub){
    int pivot = arr[lb];
    int start=lb;
    int end=ub;
    while(start<end){
        while(arr[start]<=pivot){
            start++;
        }
        while(arr[end]>pivot){
            end--;
        }
        if(start<end){
            int temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
        }
    }
    int temp=arr[lb];
    arr[lb]=arr[end];
    arr[end]=temp;
    return end;
}
int main(){
    int arr[]={5,4,3,2,1};
    int n=5;
    for(int i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
    printf("\n");
    Quicksort(arr,0,n-1);
    for(int i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
    return 0;
}