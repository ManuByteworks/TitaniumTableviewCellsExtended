//
//  TiUITableViewRowProxy+WithVisibility.m
//  TableViewRowExtension
//
//  Created by Matteo De Rose on 04/12/15.
//
//


#import "TiViewProxy.h"
#import "TiDimension.h"
#import "TiUITableViewRowProxy.h"

@interface TiUITableViewRowProxy (WithVisibility)
-(NSInteger)isVisible:(id)args;
-(NSInteger)getTopOffset:(id)args;
@end

@implementation TiUITableViewRowProxy (WithVisibility)

-(NSInteger)getTopOffset:(id)args
{
    NSInteger index = [table indexForRow:self];
    NSIndexPath* path = [table indexPathFromInt:index];
    CGRect rectOfCellInTableView = [[table tableView] rectForRowAtIndexPath: path];
    CGRect rectOfCellInSuperview = [[table tableView] convertRect: rectOfCellInTableView toView: [[table tableView] superview]];
    return rectOfCellInSuperview.origin.y;
}

-(NSInteger)isVisible:(id)args
{
    NSInteger index = [table indexForRow:self];
    NSIndexPath* path = [table indexPathFromInt:index];
    
    if(![[table tableView].indexPathsForVisibleRows containsObject:path])
    {
        return 0;
    } else {
        return 1;
    }
}

@end

