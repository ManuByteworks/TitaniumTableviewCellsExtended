//
//  TiUITableViewRowProxy+WithVisibility.h
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
